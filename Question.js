class Question{
    consturctor{
        this.input = createInput("name");
        this.button = createButton('Play');
        this.greeting = createElement('HELLO');
        this.input1 = createInput("enter you option");
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    } 
    display(){
        var title = createElement();
        this.title.html("My Quiz Game");
        this.title.position(350,0);

        var question = createElement();
        this.question.html("question:- what starts and ends with the letter 'E' , but has only one letter?");
        this.Question.position(150,80);
        this.option1.html("option1:- Everyone");
        this.option1.position(150,100);
        this.option2.html("option2:- Envelope");
        this.option2.position(150,120);
        this.option3.html("option3:- Estimate");
        this.option3.position(150,140);
        this.option4.html("option4:- Example");
        this.option4.positon(150,160);

        this.input1.position(150,230);
    }
}