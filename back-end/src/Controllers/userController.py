'''controller para o módulo de usuários'''
from flask import request, jsonify
from app_module import create_app, db
from datetime import datetime
from werkzeug.security import generate_password_hash , check_password_hash
from flask_expects_json import expects_json

from Models.userSchema import User, User_Schema

app = create_app()

#excluindo da listagem os campos que não devem ser expostos na API
fields_to_exclude = ('password', 'email_verified', 'created_date', 'deleted', 'deleted_date')

user_schema = User_Schema(exclude = fields_to_exclude)
users_schema = User_Schema(many=True, exclude = fields_to_exclude)

schema_default = {
        'full_name': {'type': 'string'},
        'email': {'type': 'string'},
        'password': {'type': 'string'}
    }

def index():
    '''lista usuários'''
    users = User.query.filter_by(deleted = False).order_by(User.created_date).all()
    return jsonify(users_schema.dump(users)), 200

schema_create = {
    'type': 'object',
    'properties': schema_default,
    'required': ['email', 'password']
}

@expects_json(schema_create)
def create():
    '''cria usuário'''
    if request.is_json:
        req = request.get_json()

        user = User(full_name = req['full_name'], password = generate_password_hash(req['password']), email = req['email'], email_verified = False, created_date = datetime.now(), deleted = False )
        db.session.add(user)
        db.session.commit()

    return jsonify({}), 201

def read(id):
    '''pega um usuario'''
    user = User.query.filter_by(id = id).first()
    return user_schema.jsonify(user), 200

    return 200

schema_update = {
    'type': 'object',
    'properties': schema_default
}

@expects_json(schema_update)
def update(id):
    '''atualizando'''
    if request.is_json:
        user_req = request.get_json()

        user = User.query.filter_by(id = id).first()

        if not user_req['full_name'] is None:
            user.full_name = user_req['full_name']

        if not user_req['email'] is None:
            user.email = user_req['email']
        
        db.session.commit()

    return 201

def destroy(id):
    '''deleta um registro do banco'''
    user = User.query.filter_by(id = id).first()
    user.deleted = True
    user.deleted_date = datetime.now()

    db.session.commit()

    return 204

def login():
    if request.is_json:
        req = request.get_json()
        print(req)
        user = User.query.filter_by(email = req['email']).first()
        if check_password_hash(user.password, req['password']):
            return jsonify({}), 200
        else:
            return jsonify({}), 401