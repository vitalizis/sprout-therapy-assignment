**Sprout Therapy Assignment**

For start project:

1. git clone https://github.com/vitalizis/sprout-therapy-assignment
2. cd to sprout-therapy-assignment
3. npm install 
4. npm start
5. npm run cypress:open - for start cypress


The following technologies were used to complete the test task:
- JavaScript, React
- react-hook-form for handle forms
- tests were started to be written on cypress

About Architecture,
- To work with the application, two main components were written that display two logical parts (data input and output) - InputForm, OutputForm which are located
 in src/components
 - The strategy design pattern was used to control the application logic. The logic control class files are located in src/utils/Algorithm. 
Separate classes have been written for the following algorithm implementations: base, Custom 1, Custom 2 versions
