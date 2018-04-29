BEGIN TRANSACTION;
  DROP TABLE IF EXISTS Member;
  DROP TABLE IF EXISTS Ingredient;
  DROP TABLE IF EXISTS Review;
  DROP TABLE IF EXISTS Recipe;
--  DROP TABLE IF EXISTS MealPlan;
--  DROP TABLE IF EXISTS PlanItem;
  COMMIT;

  /*schema starts here*/

  SET search_Path = Fresh_Fridge, '$user', public;

  CREATE DOMAIN EMailType AS VARCHAR(50) CHECK (value SIMILAR TO '[[:alnum:]_]+@[[:alnum:]]+%.[[:alnum:]]+');

  CREATE TABLE Member (
    memberNo      INTEGER,                      -- new surrogate key to allow changeable email
    email         EMailType    NOT NULL UNIQUE, -- original key from E-R diagram
    username      VARCHAR(10)  NOT NULL UNIQUE, -- we require a nickname from everyone, good to be used for login
    password      VARCHAR(20)  NOT NULL,        -- better store just a hash value of the password
    pw_salt       VARCHAR(10),                  -- newly added for better security (not needed when bcrypt used)
    nameGiven     VARCHAR(100),
    nameFamily    VARCHAR(100),
    birthdate     DATE,
    goal          text,                         -- not sure if it should have its own table
    gender        VARCHAR(1),
    CONSTRAINT Member_PK            PRIMARY KEY (memberNo),
    CONSTRAINT Gender_CHK CHECK (gender IN ('F','G'))
  );

  CREATE TABLE Recipe (
    id           INTEGER,
    memberNo     INTEGER      NOT NULL,
    name         VARCHAR(100) NOT NULL,
    methord      TEXT         NOT NULL,
    duration     INTEGER      NOT NULL,
    calories     INTEGER      NOT NULL,
    protein      INTEGER      NOT NULL,
    cabs         INTEGER      NOT NULL,
    fat          INTEGER      NOT NULL,
    rate         INTEGER      NOT NULL,
    CONSTRAINT Recipe_PK            PRIMARY KEY (id),
    CONSTRAINT Recipe_Member_FK     FOREIGN KEY (memberNo) REFERENCES Member(memberNo) on DELETE CASCADE);

   CREATE TABLE Ingredient (
    id           INTEGER,
    recipe_id    INTEGER,
    name         VARCHAR(100) NOT NULL,
    calories     INTEGER      NOT NULL,
    protein      INTEGER      NOT NULL,
    cabs         INTEGER      NOT NULL,
    fat          INTEGER      NOT NULL,
    CONSTRAINT Ingredient_PK            PRIMARY KEY (id),
    CONSTRAINT Ingredient_Recipe_FK     FOREIGN KEY (recipe_id) REFERENCES Recipe(id) on DELETE CASCADE);


   CREATE TABLE Review (
    id             INTEGER,
    recipe_id      INTEGER,
    content        text        NOT NULL,
    Likes          INTEGER     NOT NULL,
    CONSTRAINT Review_id              PRIMARY KEY (id),
    CONSTRAINT Review_Recipe_FK     FOREIGN KEY (recipe_id) REFERENCES Recipe(id) on DELETE CASCADE);
