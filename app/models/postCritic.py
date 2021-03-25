from .db import db


class PostCritic(db.Model):
    __tablename__ = 'postCritics'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    postId = db.Column(db.Integer, db.ForeignKey("posts.id"), nullable=False)
    date_created  = db.Column(db.DateTime,  default=db.func.current_timestamp())
    date_modified = db.Column(db.DateTime,  default=db.func.current_timestamp(),onupdate=db.func.current_timestamp())

    user = db.relationship("User", back_populates="postCritics")
    post = db.relationship("Post", back_populates="postCritics")

    def to_list(self):
        return self.userId
