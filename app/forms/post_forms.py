from flask_wtf import FlaskForm
from wtforms import TextAreaField, BooleanField, HiddenField


class NewPostForm(FlaskForm):
    description = TextAreaField('description')
    private = BooleanField('private')
    imagePath = HiddenField('imagePath')
    criticId = HiddenField('criticId')


class EditPostForm(FlaskForm):
    description = TextAreaField('description')
    private = BooleanField('private')
