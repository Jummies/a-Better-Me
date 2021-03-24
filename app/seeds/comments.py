from app.models import db, Comment


def seed_comments():

    first = Comment(
        userId = 1,
        postId = 1, 
        content = '1 1'
    )
    second = Comment(
        userId = 2,
        postId = 1, 
        content = '2 1'
    )
    third = Comment(
        userId = 3,
        postId = 1, 
        content = '3 1'
    )
    fourth = Comment(
        userId = 3,
        postId = 2, 
        content = '3 2'
    )
    fifth = Comment(
        userId = 3,
        postId = 2, 
        content = '3 2'
    )    
    sixth = Comment(
        userId = 3,
        postId = 1, 
        content = '3 1'
    )  
    seventh = Comment(
        userId = 2,
        postId = 1, 
        content = '2 1'
    )            
    db.session.add(first)
    db.session.add(second)
    db.session.add(third)
    db.session.add(fourth)
    db.session.add(fifth)
    db.session.add(sixth)  
    db.session.add(seventh)  
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_comments():
    db.session.execute('TRUNCATE comments;')
    db.session.commit()
