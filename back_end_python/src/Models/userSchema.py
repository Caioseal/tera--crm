'''modelo que representa a tabela tbl_users'''
from app_module import db, ma

class User(db.Model):
    __tablename__ = 'tbl_users'
    id = db.Column(db.Integer, primary_key = True)
    full_name = db.Column(db.String(100), nullable = False, unique = False)
    email = db.Column(db.String(256), nullable = False, unique = True)
    password = db.Column(db.String(256), nullable = False, unique = False)
    email_verified = db.Column(db.Boolean, nullable = False, unique = False)
    created_date = db.Column(db.DateTime, nullable = False)
    deleted = db.Column(db.Boolean, nullable = False, unique = False)
    deleted_date = db.Column(db.DateTime, nullable = False)

class User_Schema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User

"""
Create Table tbl_users (
	id serial primary key,
	username varchar(50) not null,
	first_name varchar(50) not null,
	last_name varchar(50) not null,
	email varchar(256) not null,
	password varchar(256) not null,
	email_verified boolean default 'false' not null,
	created_date timestamp default Now() not null,
	deleted boolean default 'false' not null,
	deleted_date timestamp null
)
"""