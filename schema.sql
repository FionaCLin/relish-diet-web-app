BEGIN TRANSACTION;
DROP TABLE IF EXISTS Members;
DROP TABLE IF EXISTS Ingredients;
DROP TABLE IF EXISTS Reviews;
DROP TABLE IF EXISTS Recipes;
--  DROP TABLE IF EXISTS MealPlan;
--  DROP TABLE IF EXISTS PlanItem;
COMMIT;
/*schema starts here*/
SET search_Path
= Fresh_Fridge, '$user', public;
CREATE DOMAIN EMailType AS VARCHAR(50) CHECK (value SIMILAR TO '[[:alnum:]_]+@[[:alnum:]]+%.[[:alnum:]]+');
CREATE TABLE Members
(
  id SERIAL,
  -- new surrogate key to allow changeable email
  email EMailType NOT NULL UNIQUE,
  -- original key from E-R diagram
  username VARCHAR(10) NOT NULL UNIQUE,
  -- we require a nickname from everyone, good to be used for login
  password TEXT,
  -- better store just a hash value of the password
  pw_salt VARCHAR(10),
  -- newly added for better security (not needed when bcrypt used)
  nameGiven VARCHAR(100),
  nameFamily VARCHAR(100),
  birthday DATE,
  goal TEXT,
  -- not sure if it should have its own table
  gender VARCHAR(1),
  avatar TEXT,
  CONSTRAINT Member_PK            PRIMARY KEY (id),
  CONSTRAINT Gender_CHK CHECK (gender IN ('F','G')));

CREATE TABLE Recipes
(
  id SERIAL,
  memberNo INTEGER NOT NULL,
  name VARCHAR(100) NOT NULL,
  methord TEXT,
  duration INTEGER,
  calories INTEGER,
  protein INTEGER,
  cabs INTEGER,
  fat INTEGER,
  rate INTEGER,
  images TEXT,
  at BIGINT,
  CONSTRAINT Recipe_PK            PRIMARY KEY (id),
  CONSTRAINT Recipe_Member_FK     FOREIGN KEY (memberNo) REFERENCES Members(id) on DELETE CASCADE);

CREATE TABLE BookMarks
(
  id SERIAL,
  recipe_id INTEGER,
  memberNo INTEGER,
  CONSTRAINT BookMarks_PK                  PRIMARY KEY (id),
  CONSTRAINT BookMarks_Recipe__FK          FOREIGN KEY (recipe_id) REFERENCES Recipes(id) on DELETE CASCADE,
  CONSTRAINT BookMarks_Member_FK           FOREIGN KEY (memberNo) REFERENCES Members(id) on DELETE CASCADE);

CREATE TABLE Ingredients
(
  id INTEGER,
  name VARCHAR(100) NOT NULL,
  UOM VARCHAR(100) NOT NULL,
  calories INTEGER,
  protein INTEGER,
  cabs INTEGER,
  fat INTEGER,
  ingred_type INTEGER,
  CONSTRAINT Ingredient_PK            PRIMARY KEY (id));

CREATE TABLE Recipe_Ingredients
(
  id SERIAL,
  recipe_id INTEGER,
  ingred_id INTEGER,
  amount NUMERIC,
  CONSTRAINT RecipeIngredient_PK                  PRIMARY KEY (id),
  CONSTRAINT RecipeIngredient_Recipe_FK           FOREIGN KEY (recipe_id) REFERENCES Recipes(id) on DELETE CASCADE,
  CONSTRAINT RecipeIngredient_Ingredient_FK       FOREIGN KEY (ingred_id) REFERENCES Ingredients(id)
);

CREATE TABLE Reviews
(
  id SERIAL,
  recipe_id INTEGER NOT NULL,
  memberNo INTEGER NOT NULL,
  content TEXT,
  parent INTEGER DEFAULT NULL,
  Likes INTEGER DEFAULT 0,
  create_at BIGINT,
  CONSTRAINT Review_id           PRIMARY KEY (id),
  CONSTRAINT Reviem_Member_FK    FOREIGN KEY (memberNo) REFERENCES Members(id) on DELETE CASCADE,
  CONSTRAINT Review_Recipe_FK    FOREIGN KEY (recipe_id) REFERENCES Recipes(id) on DELETE CASCADE,
  CONSTRAINT Review_Review_FK    FOREIGN KEY (parent) REFERENCES Reviews(id) on DELETE CASCADE);

CREATE TABLE Meal_Plans
(
  id SERIAL,
  title VARCHAR(100) NOT NULL,
  memberNo INTEGER NOT NULL,
  CONSTRAINT Meal_Plan_PK         PRIMARY KEY (id),
  CONSTRAINT Meal_Plan_Member_FK  FOREIGN KEY (memberNo) REFERENCES Members(id) on DELETE CASCADE);

CREATE TABLE Time_Slots
(
  id SERIAL,
  plan_id INTEGER NOT NULL,
  day VARCHAR(3),
  meal_type TEXT,
  recipe_id INTEGER NOT NULL,
  CONSTRAINT Time_Slot_PK            PRIMARY KEY (id),
  CONSTRAINT Time_Slot_Recipe_FK     FOREIGN KEY (recipe_id) REFERENCES Recipes(id),
  CONSTRAINT Time_Slot_Plan_FK       FOREIGN KEY (recipe_id) REFERENCES Meal_Plans(id),
  CONSTRAINT Day_CHECK check(day IN ('MON','TUE', 'WED', 'THU','FRI','SAT','SUN')));
