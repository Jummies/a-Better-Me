from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(
        username='Demo',
        email='demo@aa.io',
        hashed_password=generate_password_hash('password'),
        biography="Tired of being a demo? Sign up!",
        profilePicture='https://upload.wikimedia.org/wikipedia/commons/7/7e/Appacademylogo.png'
    )

    jummy = User(
        username='Jummy Park',
        email='jummy@aa.io',
        hashed_password=generate_password_hash('jummy'),
        biography="Hello! My name is Jummy, and I am a student at App Academy.",
        profilePicture='https://avatars.githubusercontent.com/u/74935506?v=4'
    )

    aang = User(
        username='Aang',
        email='aang@aa.io',
        hashed_password=generate_password_hash('password'),
        biography="Long ago, the four nations lived together in harmony. Then, everything changed when the Fire Nation attacked. Only the Avatar, master of all four elements, could stop them, but when the world needed him most, he vanished.. but I'm back!! haha xD",
        profilePicture='https://external-preview.redd.it/mdd8KvJ8AHqe0D_xbxN2_e1vRkmnB287EUVnOefdBBA.jpg?auto=webp&s=91d270e775f19734803c5814e2762ea5e2aa3923'
    )

    sokka = User(
        username='Sokka',
        email='sokka@aa.io',
        hashed_password=generate_password_hash('password'),
        biography="Water Tribe Represent!",
        profilePicture='https://cdn.discordapp.com/attachments/537497024958824480/825028278725247037/latest.png'
    )

    zuko = User(
        username='Zuko',
        email='zuko@aa.io',
        hashed_password=generate_password_hash('password'),
        biography="zuko bio here",
        profilePicture='https://i.pinimg.com/originals/45/d2/59/45d259ebc5dbc689b313209b24172af2.jpg'
    )

    katara = User(
        username='Katara',
        email='katara@aa.io',
        hashed_password=generate_password_hash('password'),
        biography="katara bio here",
        profilePicture='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/katara-avatar-the-last-airbender-1590006359.png?crop=0.719xw:0.936xh;0.0493xw,0.0642xh&resize=480:*'
    )

    toph = User(
        username='Toph',
        email='toph@aa.io',
        hashed_password=generate_password_hash('password'),
        biography="If you expected a funny quote you forgot I'm blind",
        profilePicture='https://comicvine1.cbsistatic.com/uploads/original/11133/111330923/6749796-8408088868-Toph-.png'
    )

    iroh = User(
        username='Iroh',
        email='iroh@aa.io',
        hashed_password=generate_password_hash('password'),
        biography="Sharing tea with a fascinating stranger is one of life's true delights.",
        profilePicture='https://pbs.twimg.com/profile_images/1276198576574562304/MhImKP8w_400x400.jpg'
    )

    azula = User(
        username='Azula',
        email='azula@aa.io',
        hashed_password=generate_password_hash('password'),
        biography="Rightful heir to the throne of the Fire Nation",
        profilePicture='https://rotoscopers.com/wp-content/uploads/2013/09/owDj.png'
    )

    cabbageguy = User(
        username='Cabbage Guy',
        email='cabbageguy@aa.io',
        hashed_password=generate_password_hash('password'),
        biography="Cabbage Corp just released several new carts across the world!",
        profilePicture='https://1.bp.blogspot.com/-24mjP6SQK_c/XuAdsmjSh3I/AAAAAAABUIo/zwFQ8PZhBdk7Irxek_-76DLdqDmx24IGgCNcBGAsYHQ/s1600/avatar-the-last-airbender-cabbage-merchant-header-nickelodeon-nick_2.png'
    )

    db.session.add(demo)
    db.session.add(jummy)
    db.session.add(aang)
    db.session.add(sokka)
    db.session.add(zuko)
    db.session.add(katara)
    db.session.add(toph)
    db.session.add(iroh)
    db.session.add(azula)
    db.session.add(cabbageguy)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
