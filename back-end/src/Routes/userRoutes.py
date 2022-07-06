from flask import Blueprint
from Controllers.userController import index, create, read, update, destroy,login

user_bp = Blueprint('user_bp', __name__)

user_bp.route('/', methods=['GET'])(index)
user_bp.route('/', methods=['POST'])(create)
user_bp.route('/<int:id>', methods=['GET'])(read)
user_bp.route('/<int:id>', methods=['PUT', 'PATCH'])(update)
user_bp.route('/<int:id>', methods=['DELETE'])(destroy)
user_bp.route('/login', methods=['POST'])(login)
