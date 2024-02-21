

#include <iostream>
#include <SFML/Graphics.hpp>
#include<SFML/Audio.hpp>
#include <time.h>
#include<windows.h>
#include <stdlib.h>
#include <cstring>
#include <sstream>
#include <string>
#include <cstring>
#define DELETE_KEY 8
#define ENTER_KEY 13
#define ESCAPE_KEY 27
using namespace sf;
using namespace std;
struct game1 {
    char nume[39];
}v[5];
class Textbox
{
public:
    Textbox() {}
    Textbox(int size, Color color, bool sel)
    {
        textbox.setCharacterSize(size);
        textbox.setFillColor(color);
        isSelected = sel;
        if (sel) { textbox.setString("_"); }
        else textbox.setString("");
    }
    void setfont(Font &font)
    {
        textbox.setFont(font);
    }
    void setposition(Vector2f poz)
    {
        textbox.setPosition(poz);

    }
    void setlimit(bool TF)
    {
        islimited = TF;
        
    }
    void setlimit(bool TF,int lim)
    {
        islimited = TF;
        limit = lim;

    }
    void setselected(bool sel)
    {
        isSelected = sel;
        if(!sel){
            string t = txt.str();
            string nt = "";
            for (int i = 0; i < t.length() - 1; i++) { nt += t[i]; }
            txt.str("");
            txt << nt;
            textbox.setString(nt);
        }


    }
    string getText()
    {
        return txt.str();
    }
    void drawto(RenderWindow &window)
    {
        window.draw(textbox);

    }
    void type0n(Event input)
    {
        if (isSelected)
        {
            int chartype = input.text.unicode;
            if (chartype<128)
            {
                if (islimited)
                {
                    if (txt.str().length() <= limit) { inputlogic(chartype); }
                    else if(txt.str().length() > limit && chartype==DELETE_KEY )
                    {
                        deletecharacter();
                    }
                    else  inputlogic(chartype);
            }


            }

    }

    }
private:
    Text textbox;
    ostringstream txt;
    bool isSelected = 0;
    bool islimited = 0;
    int limit;
    bool sprite_isvisible=1;
    void inputlogic(int chartyped)
    {
        if (chartyped != DELETE_KEY && chartyped != ESCAPE_KEY && chartyped != ENTER_KEY)
        {
            txt << static_cast<char>(chartyped);

    }
        else if (chartyped == DELETE_KEY)
        {if(txt.str().length()>0){ deletecharacter(); }
     
}
        textbox.setString(txt.str() + "_");
    }
    void deletecharacter() {
        string t=txt.str();
        string nt="";
        for (int i = 0; i < t.length()-1; i++) { nt += t[i]; }
        txt.str("");
        txt << nt;
        textbox.setString(txt.str());
    }
};
float 
score = 0;
int sprite_isvisible1 = 1, sprite_isvisible2 = 1, sprite_isvisible3 = 1, sprite_isvisible4= 1;
int sprite_isvisible5 = 1, sprite_isvisible6 = 1, sprite_isvisible7 = 1, sprite_isvisible8 = 1;
bool collision(Sprite box,CircleShape s)
{
    FloatRect b2 = box.getGlobalBounds();
    FloatRect b1 = s.getGlobalBounds();
    return b2.intersects(b1);
    


}
int main()
{
   int  k=0,sized=0,game=1,cout2=0;
   bool selected=0, selected1 = 0, selected2 = 0, selected3 = 0, selected4 = 0, selected5 = 0, selected6 = 0;
   bool selected7 = 0,selected8 = 0, selected9 = 0,vis1=1,vis2=1,vis3=1,vis4=1,vis5=1;
    int x, y,rd[11],randpoz[11],scaler1,scaler2,count=0;
    int i;
    char S[12];
    ostringstream ss;
    Texture title,start;
    Sprite title1,start1;
    start.loadFromFile("start.png");
    title.loadFromFile("TestyourEnglish.png");
    title1.setTexture(title);
    start1.setTexture(start);
    scaler1 = title1.getScale().x;
    scaler2 = title1.getScale().y;
    title1.setOrigin(Vector2f(-550.0f, -300.0f));
    start1.setOrigin(-650.0f, -600.0f);
    Textbox textbox1(40,Color::Black,1);
    textbox1.setposition(Vector2f(100.0f, 100.0f));
    randpoz[1] = 500.0f;
    randpoz[2] = 710.0f;
    randpoz[3] = 920.0f;
    randpoz[4] = 1130.0f;
    randpoz[5] = 1340.0f;
    randpoz[6] = 1550.0f;
    randpoz[7] = 1760.0f;
    randpoz[8] = 1970.0f;
    srand(time(NULL));
    int j;
    for (i = 1; i <= 8; i++) { rd[i] =( rand() % 1750+20) - 1850; }
    for (i = 1; i <= 8; i++) { cout << rd[i] << endl; }
    for (i = 1; i <= 7; i++) { j = rand() % 8 + 1; swap(randpoz[i], randpoz[j]); }

   strcpy_s( v[1].nume ,"Which one is the strawberry?");
   strcpy_s(v[2].nume, "Which one is the banana?");
   strcpy_s(v[3].nume, "Which one is the apple?");
   strcpy_s(v[4].nume, "Which one is the blueberry?");
    RenderWindow window(VideoMode::getDesktopMode(), "Project", Style::Fullscreen);
    Vector2u backgroundSize = window.getSize();
    RectangleShape shape(Vector2f(backgroundSize.x,backgroundSize.y));
    RectangleShape eyes(Vector2f(100.0f, 100.0f));
    RectangleShape ear(Vector2f(100.0f, 100.0f));
    RectangleShape mouth(Vector2f(100.0f, 100.0f));
    RectangleShape eyebrows(Vector2f(100.0f, 100.0f));
    RectangleShape nose(Vector2f(100.0f, 100.0f));
    Sprite nosepaper, eyepaper, ebpaper, mouthpaper, earpaper;
    Texture Mouth, Nose, Ear, Eyebrow, Eye,paperE,paperEA,paperEB,paperM,paperN;
    Eye.loadFromFile("eye.png");
    Mouth.loadFromFile("mouth.png");
    Nose.loadFromFile("nose.png");
    Ear.loadFromFile("ear.png");
    Eyebrow.loadFromFile("eyebrow.png");
    paperE.loadFromFile("Eye1.png");
    paperEA.loadFromFile("Ear1.png");
    paperEB.loadFromFile("Eyebrows1.png");
    paperM.loadFromFile("Mouth1.png");
    paperN.loadFromFile("Nose1.png");
    eyes.setTexture(&Eye);
    mouth.setTexture(& Mouth);
    eyebrows.setTexture(&Eyebrow);
    nose.setTexture(&Nose);
    ear.setTexture(&Ear);
    nosepaper.setTexture(paperN);
    earpaper.setTexture(paperEA);
    eyepaper.setTexture(paperE);
    mouthpaper.setTexture(paperM);
    ebpaper.setTexture(paperEB);
   CircleShape s(100.0f);
   CircleShape ci(50.0f);
   CircleShape s1(100.0f);
   CircleShape s2(100.0f);
   CircleShape s3(100.0f);
   CircleShape s4(100.0f);
   CircleShape s5(100.0f);
   CircleShape s6(100.0f);
   CircleShape s7(100.0f);
   s1.setFillColor(Color::Red);
   s2.setFillColor(Color::Green);
   s3.setFillColor(Color::Cyan);
   s4.setFillColor(Color::Magenta);
   s5.setFillColor(Color::Yellow);
   s6.setFillColor(Color::Yellow);
   s7.setFillColor(Color::Blue);
   String strq;
   RectangleShape resized(Vector2f(70.0f,70.0f));
   resized.setFillColor(Color::Transparent);
   resized.setOutlineColor(Color::Red);
   resized.setOutlineThickness(12);
   resized.setOrigin(Vector2f(-1700.0f, -20.0f));
   ci.setOrigin(Vector2f(-1800.0f, 0.0f));
   s.setFillColor(Color::Red);
    Texture t1,button1,Banana,Strawberry,Apple,Blueberry,Continue,y1,y2,y3,y4,y5,y6,y7,y8,boxbox;
    Continue.loadFromFile("continue.jpg");
    boxbox.loadFromFile("box.jfif");
    y1.loadFromFile("texture1.jfif");
    y2.loadFromFile("texture2.jpg");
    y3.loadFromFile("texture3.jpg");
    y4.loadFromFile("texture4.jpg");
    y5.loadFromFile("texture5.jpg");
    y6.loadFromFile("texture6.jpg");
    y7.loadFromFile("texture7.jpg");
    y8.loadFromFile("texture8.jpg");
    s.setTexture(&y1);
    s1.setTexture(&y2);
    s2.setTexture(&y3);
    s3.setTexture(&y4);
    s4.setTexture(&y5);
    s5.setTexture(&y6);
    s6.setTexture(&y7);
    s7.setTexture(&y8);
    s.setOrigin(Vector2f(rd[1], randpoz[1]));
    s1.setOrigin(Vector2f(rd[2], randpoz[2]));
    s2.setOrigin(Vector2f(rd[3], randpoz[3]));
    s3.setOrigin(Vector2f(rd[4], randpoz[4]));
    s4.setOrigin(Vector2f(rd[5], randpoz[5]));
    s5.setOrigin(Vector2f(rd[6], randpoz[6]));
    s6.setOrigin(Vector2f(rd[7], randpoz[7]));
    s7.setOrigin(Vector2f(rd[8], randpoz[8]));
    for (i = 1; i <= 10; i++) rd[i] = (rand() % 1600 + 100) - 1600;
  
    for (i = 1; i <= 10; i++) { randpoz[i] =0- (rand()%700+50); }
    ebpaper.setOrigin(Vector2f(rd[1], randpoz[1]));
    eyepaper.setOrigin(Vector2f(rd[2], randpoz[2]));
    earpaper.setOrigin(Vector2f(rd[3], randpoz[3]));
    mouthpaper.setOrigin(Vector2f(rd[4], randpoz[4]));
    nosepaper.setOrigin(Vector2f(rd[5], randpoz[5]));
    eyes.setOrigin(Vector2f(rd[6], randpoz[6]));
    eyebrows.setOrigin(Vector2f(rd[7], randpoz[7]));
    ear.setOrigin(Vector2f(rd[8], randpoz[8]));
    mouth.setOrigin(Vector2f(rd[9], randpoz[9]));
    nose.setOrigin(Vector2f(rd[10], randpoz[10]));
    Sprite Cont(Continue);
    Sprite Cont2(Continue);
    Cont.setOrigin(Vector2f(-800.0f, -700.0f));
    Cont2.setOrigin(Vector2f(-800.0f, -700.0f));
    t1.loadFromFile("f.jpg");
    button1.loadFromFile("closebutton1.jpg");
    Banana.loadFromFile("Banana.jfif");
    Strawberry.loadFromFile("strawberry.jfif");
    Apple.loadFromFile("apple.jfif");
    Blueberry.loadFromFile("blueberry.jfif");
    shape.setTexture(&t1);
    ci.setTexture(&button1);
    ci.setFillColor(Color::Red);
    Sprite banana(Banana);
    Sprite apple(Apple);
    Sprite strawberry(Strawberry);
    Sprite blueberry(Blueberry);
    Sprite box(boxbox);
    banana.setOrigin(Vector2f(-1300.0f,-400.0f));
    blueberry.setOrigin(Vector2f(-850.0f, -400.0f));
    strawberry.setOrigin(Vector2f(-500.0f, -400.0f));
    apple.setOrigin(Vector2f(-150.0f, -400.0f));
    Text textg1,textg2;
    Font font;
    font.loadFromFile("ArialCEMTBlack.ttf");
    textbox1.setfont(font);
    textg1.setFont(font);
    i = rand() % 4 + 1;
    textg1.setString(v[i].nume);
    textg1.setCharacterSize(60);
    textg1.setFillColor(Color::Yellow);
    textg1.setOrigin(Vector2f(-200.0f, -200.0f));
    textg2.setString("Catch only the vegetables(Use A and D keys to move)");
    textg2.setCharacterSize(40);
    textg2.setFillColor(Color::Yellow);
    textg2.setOrigin(Vector2f(-200.0f, -200.0f));
    textg2.setFont(font);
    Text myscore,wrongansware,rightansware,input;
    Text textg3;
    textg3.setString("Match the words with the picture");
    textg3.setCharacterSize(72);
    textg3.setFont(font);
    textg3.setFillColor(Color::Yellow);
    textg3.setOrigin(Vector2f(-200.0f,-200.0f));
    wrongansware.setString("Sry, Your answare is wong");
    wrongansware.setCharacterSize(72);
    wrongansware.setFillColor(Color::Yellow);
    wrongansware.setOrigin(Vector2f(-200.0f, -200.0f));
    wrongansware.setFont(font);
    rightansware.setString("Congrulations ,you got the right answare");
    rightansware.setFont(font);
    rightansware.setCharacterSize(72);
    rightansware.setFillColor(Color::Yellow);
    rightansware.setOrigin(Vector2f(-200.0f, -200.0f));
    myscore.setCharacterSize(56);
    myscore.setPosition({ 10,10 });
    myscore.setFillColor(Color::Yellow);
    myscore.setFont(font);
    input.setCharacterSize(34);
    input.setFont(font);
    input.setFillColor(Color::Yellow);
    ss << "Score: " << score;
    myscore.setString(ss.str());
    box.setOrigin(Vector2f(-800.0f, -800.0f));
    

    while (window.isOpen())
    {

      
        if (k < 4) {
            ss.str("");
            ss << "Score: " << score;
            myscore.setString(ss.str());
        }
        else {

            ss.str("");
            ss << "Well done! Your score is: " << score;
            myscore.setString(ss.str());

        }
        Event event;
        while (window.pollEvent(event))
        {

          
            if (event.type == Event::Closed)
                window.close();
            if(event.type==Event::Resized)
                window.create(VideoMode::getDesktopMode(), "Project", Style::Fullscreen);
            if (k == 3) {
                if (event.type == Event::MouseButtonPressed) {
                    if (event.mouseButton.button == Mouse::Left) {
                        if (ebpaper.getGlobalBounds().
                            contains(Mouse::getPosition(window).x,
                                Mouse::getPosition(window).y))
                        {
                            ebpaper.setOrigin(event.mouseButton.x - (ebpaper.getPosition().x - ebpaper.getOrigin().x),
                                event.mouseButton.y - (ebpaper.getPosition().y - ebpaper.getOrigin().y));
                            selected = 1;

                        }
                        if (earpaper.getGlobalBounds().
                            contains(sf::Mouse::getPosition(window).x,
                                sf::Mouse::getPosition(window).y))
                        {
                            earpaper.setOrigin(event.mouseButton.x - (earpaper.getPosition().x - earpaper.getOrigin().x),
                                event.mouseButton.y - (earpaper.getPosition().y - earpaper.getOrigin().y));
                            selected1 = 1;

                        }
                        if (mouthpaper.getGlobalBounds().
                            contains(sf::Mouse::getPosition(window).x,
                                sf::Mouse::getPosition(window).y))
                        {
                            mouthpaper.setOrigin(event.mouseButton.x - (mouthpaper.getPosition().x - mouthpaper.getOrigin().x),
                                event.mouseButton.y - (mouthpaper.getPosition().y - mouthpaper.getOrigin().y));
                            selected2 = 1;

                        }
                        if (nosepaper.getGlobalBounds().
                            contains(sf::Mouse::getPosition(window).x,
                                sf::Mouse::getPosition(window).y))
                        {
                            nosepaper.setOrigin(event.mouseButton.x - (nosepaper.getPosition().x - nosepaper.getOrigin().x),
                                event.mouseButton.y - (nosepaper.getPosition().y - nosepaper.getOrigin().y));
                            selected3 = 1;

                        }
                        if (eyepaper.getGlobalBounds().
                            contains(sf::Mouse::getPosition(window).x,
                                sf::Mouse::getPosition(window).y))
                        {
                            eyepaper.setOrigin(event.mouseButton.x - (eyepaper.getPosition().x - eyepaper.getOrigin().x),
                                event.mouseButton.y - (eyepaper.getPosition().y - eyepaper.getOrigin().y));
                            selected4 = 1;

                        }
                        if (eyebrows.getGlobalBounds().
                            contains(sf::Mouse::getPosition(window).x,
                                sf::Mouse::getPosition(window).y))
                        {
                            eyebrows.setOrigin(event.mouseButton.x - (eyebrows.getPosition().x - eyebrows.getOrigin().x),
                                event.mouseButton.y - (eyebrows.getPosition().y - eyebrows.getOrigin().y));
                            selected5 = 1;

                        }
                        if (ear.getGlobalBounds().
                            contains(sf::Mouse::getPosition(window).x,
                                sf::Mouse::getPosition(window).y))
                        {
                            ear.setOrigin(event.mouseButton.x - (ear.getPosition().x - ear.getOrigin().x),
                                event.mouseButton.y - (ear.getPosition().y - ear.getOrigin().y));
                            selected6 = 1;

                        }
                        if (mouth.getGlobalBounds().
                            contains(sf::Mouse::getPosition(window).x,
                                sf::Mouse::getPosition(window).y))
                        {
                            mouth.setOrigin(event.mouseButton.x - (mouth.getPosition().x - mouth.getOrigin().x),
                                event.mouseButton.y - (mouth.getPosition().y - mouth.getOrigin().y));
                            selected7 = 1;

                        }
                        if (nose.getGlobalBounds().
                            contains(sf::Mouse::getPosition(window).x,
                                sf::Mouse::getPosition(window).y))
                        {
                            nose.setOrigin(event.mouseButton.x - (nose.getPosition().x - nose.getOrigin().x),
                                event.mouseButton.y - (nose.getPosition().y - nose.getOrigin().y));
                            selected8 = 1;

                        }
                        if (eyes.getGlobalBounds().
                            contains(sf::Mouse::getPosition(window).x,
                                sf::Mouse::getPosition(window).y))
                        {
                            eyes.setOrigin(event.mouseButton.x - (eyes.getPosition().x - eyes.getOrigin().x),
                                event.mouseButton.y - (eyes.getPosition().y - eyes.getOrigin().y));
                            selected9 = 1;

                        }


                    }
                }
                if (event.type == Event::MouseMoved) {
                    if (selected)
                    {

                        ebpaper.setPosition(sf::Mouse::getPosition(window).x, sf::Mouse::getPosition(window).y);
                    }
                    if (selected1)
                    {

                        earpaper.setPosition(sf::Mouse::getPosition(window).x, sf::Mouse::getPosition(window).y);
                    }
                        if (selected2)
                        {

                            mouthpaper.setPosition(sf::Mouse::getPosition(window).x, sf::Mouse::getPosition(window).y);
                        }
                        if (selected3)
                        {

                            nosepaper.setPosition(sf::Mouse::getPosition(window).x, sf::Mouse::getPosition(window).y);
                        }
                        if (selected4)
                        {

                            eyepaper.setPosition(sf::Mouse::getPosition(window).x, sf::Mouse::getPosition(window).y);
                        }
                        if (selected5)
                        {

                            eyebrows.setPosition(sf::Mouse::getPosition(window).x, sf::Mouse::getPosition(window).y);
                        }
                        if (selected6)
                        {

                            ear.setPosition(sf::Mouse::getPosition(window).x, sf::Mouse::getPosition(window).y);
                        }
                        if (selected7)
                        {

                            mouth.setPosition(sf::Mouse::getPosition(window).x, sf::Mouse::getPosition(window).y);
                        }
                        if (selected8)
                        {

                            nose.setPosition(sf::Mouse::getPosition(window).x, sf::Mouse::getPosition(window).y);
                        }
                        if (selected9)
                        {

                            eyes.setPosition(sf::Mouse::getPosition(window).x, sf::Mouse::getPosition(window).y);
                        }
                     
                    
                }
                if (event.type == Event::MouseButtonReleased) { 
                selected = 0; selected1 = 0;
                selected2 = 0; selected3 = 0;
                selected4 = 0; selected5 = 0;
                selected6 = 0; selected7 = 0;
                selected8 = 0; selected9 = 0;
                }
                

            }
        }

       

 
            window.clear();
          window.draw(shape);
          if (k == 0) {
              window.draw(title1);
              window.draw(start1);
          }
         if( sprite_isvisible1== 1) window.draw(s);
          window.draw(ci);
          textbox1.drawto(window);
       if(k>0)window.draw(myscore);
          if (k == 1 && game == 2 && score == 0) { window.draw(wrongansware); window.draw(Cont);
          }
          if (k == 1 && game == 2 && score == 1) { window.draw(rightansware); window.draw(Cont);
          }
         if(k==1 && game==1)  window.draw(textg1);
       
       
         window.draw(resized);
         if (k == 1) {
             window.draw(banana);
             window.draw(strawberry);
             window.draw(apple);
             window.draw(blueberry);
          
         }
         if (sprite_isvisible2 == 1)    window.draw(s1);
         if (sprite_isvisible3 == 1)     window.draw(s2);
         if (sprite_isvisible4 == 1)   window.draw(s3);
         if (sprite_isvisible5 == 1) window.draw(s4);
         if (sprite_isvisible6 == 1)  window.draw(s5);
         if (sprite_isvisible7 == 1) window.draw(s6);
         if (sprite_isvisible8 == 1) window.draw(s7);
      
         if (k == 2) {
             window.draw(box);
             window.draw(textg2);
             s.move(0.0f, 0.2f);
             s1.move(0.0f, 0.2f);
             s2.move(0.0f, 0.2f);
             s3.move(0.0f, 0.2f);
             s4.move(0.0f, 0.2f);
             s5.move(0.0f, 0.2f);
             s6.move(0.0f, 0.2f);
             s7.move(0.0f, 0.2f);
         }
         if (k == 3 && game == 2)
         {
             window.draw(Cont2);
             window.draw(textg3);
         }
         if (k == 3 &&game==3)
         {
             if (vis1)window.draw(eyebrows);
             if (vis2)window.draw(eyes);
             if (vis3)window.draw(nose);
             if (vis4)window.draw(ear);
             if (vis5)window.draw(mouth);
             if (vis3)window.draw(nosepaper);
             if (vis2)window.draw(eyepaper);
             if (vis4)window.draw(earpaper);
             if (vis5)window.draw(mouthpaper);
             if (vis1)window.draw(ebpaper);
         }
         if (k == 4) { myscore.setOrigin(Vector2f(-650.0, -500.0f)); }

            window.display();
   
            if (Keyboard::isKeyPressed(Keyboard::D))box.move(1.0f, 0.0f);
            if (Keyboard::isKeyPressed(Keyboard::A))box.move(-1.0f, 0.0f);
            if (Keyboard::isKeyPressed(Keyboard::R))k = 1;
      
            if (Mouse::isButtonPressed(Mouse::Left))
            {

                Vector2f mouse = window.mapPixelToCoords(Mouse::getPosition(window));
         

                FloatRect bounds =ci.getGlobalBounds();


                if (bounds.contains(mouse))
                {
                    window.close();

                }
            }
            if (Mouse::isButtonPressed(Mouse::Left))
            {

                Vector2f mouse = window.mapPixelToCoords(Mouse::getPosition(window));


                FloatRect bounds = resized.getGlobalBounds();


                if (bounds.contains(mouse))
                {
                               if (Mouse::isButtonPressed(Mouse::Left))
            
                    window.create(VideoMode(1380,820), "Project", Style::Default);

            

                }
            }
      if(k==0)      if (Mouse::isButtonPressed(Mouse::Left))
            {

                Vector2f mouse = window.mapPixelToCoords(Mouse::getPosition(window));


                FloatRect bounds = start1.getGlobalBounds();


                if (bounds.contains(mouse))
                {
                    k = 1;


                }
            }
            if (k == 1  && game==1) {
           if(i==1)     if (Mouse::isButtonPressed(Mouse::Left))
                {

                    Vector2f mouse = window.mapPixelToCoords(Mouse::getPosition(window));


                    FloatRect bounds = blueberry.getGlobalBounds();
                    FloatRect bounds2 = apple.getGlobalBounds();
                    FloatRect bounds3 = banana.getGlobalBounds();
                    FloatRect bounds4 = strawberry.getGlobalBounds();



                    if (bounds.contains(mouse))
                    {
                        strawberry.setColor(Color::Green);
                        apple.setColor(Color::Red);
                        blueberry.setColor(Color::Red);
                        banana.setColor(Color::Red);
                        game = 2;
                   
                   
            


                    }
                    if (bounds.contains(mouse))
                    {
                        strawberry.setColor(Color::Green);
                        apple.setColor(Color::Red);
                        blueberry.setColor(Color::Red);
                        banana.setColor(Color::Red);
                        game = 2;
                    




                    }
                    if (bounds.contains(mouse))
                    {
                        strawberry.setColor(Color::Green);
                        apple.setColor(Color::Red);
                        blueberry.setColor(Color::Red);
                        banana.setColor(Color::Red);
                        game = 2;
                      




                    }
                    if (bounds4.contains(mouse))
                    {
                        strawberry.setColor(Color::Green);
                        apple.setColor(Color::Red);
                        blueberry.setColor(Color::Red);
                        banana.setColor(Color::Red);
                        game = 2;
                        score++;




                    }
                }
           if (i == 2)     if (Mouse::isButtonPressed(Mouse::Left))
           {

               Vector2f mouse = window.mapPixelToCoords(Mouse::getPosition(window));

               FloatRect bounds = blueberry.getGlobalBounds();
               FloatRect bounds2 = apple.getGlobalBounds();
               FloatRect bounds3 = banana.getGlobalBounds();
               FloatRect bounds4 = strawberry.getGlobalBounds();


               if (bounds.contains(mouse))
               {
                   strawberry.setColor(Color::Red);
                   apple.setColor(Color::Red);
                   blueberry.setColor(Color::Red);
                   banana.setColor(Color::Green);
                   game = 2;
                
              
                


               }
               if (bounds2.contains(mouse))
               {
                   strawberry.setColor(Color::Red);
                   apple.setColor(Color::Red);
                   blueberry.setColor(Color::Red);
                   banana.setColor(Color::Green);
                   game = 2;
                 




               }
               if (bounds3.contains(mouse))
               {
                   strawberry.setColor(Color::Red);
                   apple.setColor(Color::Red);
                   blueberry.setColor(Color::Red);
                   banana.setColor(Color::Green);
                   game = 2;
                   score++;




               }
               if (bounds4.contains(mouse))
               {
                   strawberry.setColor(Color::Red);
                   apple.setColor(Color::Red);
                   blueberry.setColor(Color::Red);
                   banana.setColor(Color::Green);
                   game = 2;
                   



               }
           }
           if (i == 3)     if (Mouse::isButtonPressed(Mouse::Left))
           {

               Vector2f mouse = window.mapPixelToCoords(Mouse::getPosition(window));


               FloatRect bounds = blueberry.getGlobalBounds();
               FloatRect bounds2 = apple.getGlobalBounds();
               FloatRect bounds3 = banana.getGlobalBounds();
               FloatRect bounds4 = strawberry.getGlobalBounds();



               if (bounds.contains(mouse))
               {
                   strawberry.setColor(Color::Red);
                   apple.setColor(Color::Green);
                   blueberry.setColor(Color::Red);
                   banana.setColor(Color::Red);
                   game = 2;
               
                  


               }
               if (bounds2.contains(mouse))
               {
                   strawberry.setColor(Color::Red);
                   apple.setColor(Color::Green);
                   blueberry.setColor(Color::Red);
                   banana.setColor(Color::Red);
                   game = 2;
                   score++;




               }
               if (bounds3.contains(mouse))
               {
                   strawberry.setColor(Color::Red);
                   apple.setColor(Color::Green);
                   blueberry.setColor(Color::Red);
                   banana.setColor(Color::Red);
                   game = 2;
                




               }
               if (bounds4.contains(mouse))
               {
                   strawberry.setColor(Color::Red);
                   apple.setColor(Color::Green);
                   blueberry.setColor(Color::Red);
                   banana.setColor(Color::Red);
                   game = 2;
               




               }
           }
           if (i == 4)     if (Mouse::isButtonPressed(Mouse::Left))
           {

               Vector2f mouse = window.mapPixelToCoords(Mouse::getPosition(window));


               FloatRect bounds = blueberry.getGlobalBounds();
               FloatRect bounds2 = apple.getGlobalBounds();
               FloatRect bounds3 = banana.getGlobalBounds();
               FloatRect bounds4 = strawberry.getGlobalBounds();


               if (bounds.contains(mouse))
               {
                   strawberry.setColor(Color::Red);
                   apple.setColor(Color::Red);
                   blueberry.setColor(Color::Green);
                   banana.setColor(Color::Red);
                   game = 2;
                   score++;
               
                   
              


               }
               if (bounds2.contains(mouse))
               {
                   strawberry.setColor(Color::Red);
                   apple.setColor(Color::Red);
                   blueberry.setColor(Color::Green);
                   banana.setColor(Color::Red);
                   game = 2;
                   





               }
               if (bounds3.contains(mouse))
               {
                   strawberry.setColor(Color::Red);
                   apple.setColor(Color::Red);
                   blueberry.setColor(Color::Green);
                   banana.setColor(Color::Red);
                   game = 2;
              





               }
               if (bounds4.contains(mouse))
               {
                   strawberry.setColor(Color::Red);
                   apple.setColor(Color::Red);
                   blueberry.setColor(Color::Green);
                   banana.setColor(Color::Red);
                   game = 2;
                 





               }
           }





            }
       if (Mouse::isButtonPressed(Mouse::Left))
            {

                Vector2f mouse = window.mapPixelToCoords(Mouse::getPosition(window));


                FloatRect bounds = Cont.getGlobalBounds();


              if (bounds.contains(mouse))
                {
                  if (game == 2)  k = 2;
           
                }
        
            }
    



       
      
            if (k == 2)
            {
                if (collision(box, s)) { if (sprite_isvisible1) { count++; score++; sprite_isvisible1 = 0; }}
                if (collision(box, s1)) { if (sprite_isvisible2) { count++; score++; sprite_isvisible2 = 0; } }
                if (collision(box, s2)) { if (sprite_isvisible3) { count++; score++; sprite_isvisible3 = 0; } }
                if (collision(box, s3)) { if (sprite_isvisible4) { count ++;score++; sprite_isvisible4 = 0;}}
                if (collision(box, s4)) { if (sprite_isvisible5) { count++; score = score - 0.5; sprite_isvisible5 = 0; } }
                if (collision(box, s5)) { if (sprite_isvisible6) { count++; score = score - 0.5; ; sprite_isvisible6 = 0; } }
                if (collision(box, s6)) { if (sprite_isvisible7) { count++; score = score - 0.5; ; sprite_isvisible7 = 0; } }
                if (collision(box, s7)) { if (sprite_isvisible8) { count++; score = score - 0.5; ; sprite_isvisible8 = 0; } }
                if (s.getPosition().y>2900)if (sprite_isvisible1) { count++; sprite_isvisible1 = 0;}
                if (s1.getPosition().y >2900)if (sprite_isvisible2) { count++;sprite_isvisible2 = 0;}
                if (s2.getPosition().y >2900)if (sprite_isvisible3) { count++; sprite_isvisible3 = 0;}
                if (s3.getPosition().y > 2900)if (sprite_isvisible4) { count++; sprite_isvisible4= 0;  }
                if (s4.getPosition().y > 2900)if (sprite_isvisible5) { count++; sprite_isvisible5 = 0;}
                if (s5.getPosition().y > 2900)if (sprite_isvisible6) { count++; sprite_isvisible6 = 0;}
                if (s6.getPosition().y > 2900)if (sprite_isvisible7) { count++; sprite_isvisible7 = 0; }
                if (s7.getPosition().y > 2900)if (sprite_isvisible8) { count++;  sprite_isvisible8 = 0; }
                if (count == 8) { k = 3;  }
                
           }
            if (k == 3) {
               if (Mouse::isButtonPressed(Mouse::Left))
                {

                    Vector2f mouse1 = window.mapPixelToCoords(Mouse::getPosition(window));


                    FloatRect bounds1 = Cont2.getGlobalBounds();


                    if (bounds1.contains(mouse1))
                    {
                        game = 3;

                    }
                }

            if(vis2!=0)    if (Mouse::isButtonPressed(Mouse::Left))
                {

                    FloatRect object1 = eyepaper.getGlobalBounds();


                    FloatRect object2 = eyes.getGlobalBounds();


                    if (object1.intersects(object2))
                    {

                        vis2 = 0;
                        score++;
                    }

                }

           if(vis3!=0)     if (Mouse::isButtonPressed(Mouse::Left))
                {

                    FloatRect object1 = nosepaper.getGlobalBounds();


                    FloatRect object2 = nose.getGlobalBounds();


                    if (object1.intersects(object2))
                    {

                        vis3 = 0;
                        score++;
                    }

                }

           if(vis1!=0)     if (Mouse::isButtonPressed(Mouse::Left))
                {

                    FloatRect object1 = ebpaper.getGlobalBounds();


                    FloatRect object2 = eyebrows.getGlobalBounds();


                    if (object1.intersects(object2))
                    {

                        vis1 = 0;
                        score++;
                    }

                }
          if(vis4!=0)      if (Mouse::isButtonPressed(Mouse::Left))
                {

                    FloatRect object1 = earpaper.getGlobalBounds();


                    FloatRect object2 = ear.getGlobalBounds();


                    if (object1.intersects(object2))
                    {

                        vis4 = 0;
                        score++;
                    }
                }
        if(vis5!=0)        if (Mouse::isButtonPressed(Mouse::Left))
                {

                    FloatRect object1 = mouthpaper.getGlobalBounds();


                    FloatRect object2 = mouth.getGlobalBounds();


                    if (object1.intersects(object2))
                    {

                        vis5 = 0;
                        score++;
                    }
                }

            }
            
            if (vis1 == 0)    if (vis2 == 0)    if (vis3 == 0)    if (vis4 == 0)     if (vis5 == 0)k = 4;
           
    }
    return 0;

}