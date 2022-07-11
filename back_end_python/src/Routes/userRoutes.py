from flask import Blueprint
from Controller.userController import index, create, read, updateName, updateEmail, updatePassword, destroy, login

user_bp = Blueprint('user_bp', __name__)

user_bp.route('/', methods=['GET'])(index)
user_bp.route('/', methods=['POST'])(create)
user_bp.route('/<int:id>', methods=['GET'])(read)
user_bp.route('/updatename/<int:id>', methods=['PUT', 'PATCH'])(updateName)
user_bp.route('/updateemail/<int:id>', methods=['PUT', 'PATCH'])(updateEmail)
user_bp.route('/updatepassword/<int:id>', methods=['PUT', 'PATCH'])(updatePassword)
user_bp.route('/<int:id>', methods=['DELETE'])(destroy)
user_bp.route('/login', methods=['POST'])(login)
