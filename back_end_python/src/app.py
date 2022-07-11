'''restful api com flask'''
from app_module import create_app
from flask import jsonify, make_response
from jsonschema import ValidationError
from flask_cors import CORS

from Routes.userRoutes import user_bp

app = create_app()
cors = CORS(app, resources={r"/*": {"origins": "*"}})

app.register_blueprint(user_bp, url_prefix = '/users')

@app.errorhandler(400)
def bad_request(error):
    '''retorno de erros usando validação do módulo flask-expects-json'''
    if isinstance(error.description, ValidationError):
        original_error = error.description
        return make_response(jsonify({'error': original_error.message}), 400)
    # handle other "Bad Request"-errors
    return error

if __name__ == '__main__':
    app.debug = True
    app.run()
