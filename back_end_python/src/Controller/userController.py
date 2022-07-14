'''controller para o módulo de usuários'''
from flask import request, jsonify
from app_module import create_app, db
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from flask_expects_json import expects_json

from Models.userSchema import User, User_Schema

app = create_app()

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
    try:
        if request.is_json:
            req = request.get_json()

            user = User(full_name = req['full_name'], password = generate_password_hash(req['password']), email = req['email'], email_verified = False, created_date = datetime.now(), deleted = False )
            db.session.add(user)
            db.session.commit()
    except Exception as e:
        return jsonify({"message": "Erro ao criar usuário"}), 500
        
    return jsonify({}), 201

def read(id):
    '''pega um usuario'''
    try:
        user = User.query.filter_by(id = id).first()
        return user_schema.jsonify(user), 200
    except Exception as e:
        return jsonify({"message": "Erro ao buscar usuário"}), 500

    return jsonify({"message": "Usuário retornado com sucesso"}), 200

schema_update = {
    'type': 'object',
    'properties': schema_default
}

def updateName(id):
    '''atualizando'''
    if request.is_json:
            user_req = request.get_json()
            print(user_req)
            user = User.query.filter_by(id = id).first()

            if not user_req['full_name'] is None:
                user.full_name = user_req['full_name']
            
            db.session.commit()
    return jsonify({"message": "Nome atualizado com sucesso"}), 201

def updateEmail(id):
    '''atualizando'''
    if request.is_json:
            user_req = request.get_json()
            print(user_req)
            user = User.query.filter_by(id = id).first()

            if not user_req['email'] is None:
                user.email = user_req['email']
            
            db.session.commit()
    return jsonify({"message": "Email atualizado com sucesso"}), 201

def updatePassword(id):
    '''atualizando'''
    if request.is_json:
            user_req = request.get_json()
            print(user_req)
            user = User.query.filter_by(id = id).first()

            if not user_req['password'] is None:
                user.password = generate_password_hash(user_req['password'])
            
            db.session.commit()
    return jsonify({"message": "Senha atualizado com sucesso"}), 201   

def destroy(id):
    '''deleta um registro do banco'''
    try:
        user = User.query.filter_by(id = id).first()
        user.deleted = True
        user.deleted_date = datetime.now()

        db.session.commit()

        return jsonify({"message": "Usuário deletado com sucesso"}), 204
    except Exception as e:
        return jsonify({"message": "Erro ao deletar usuário"}), 500

def login():
    if request.is_json:
        try:
            req = request.get_json()
            user = User.query.filter_by(email = req['email']).first()
            if check_password_hash(user.password, req['password']) and user.deleted == False:
                return jsonify({"full_name": user.full_name, "id": user.id}), 200
            else:
                return jsonify({}), 401
        except:
            return jsonify({}), 401