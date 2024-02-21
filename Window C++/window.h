#pragma once 

#include <string>
#include <iostream>
#include <SDL2/SDL_render.h>
#include <SDL2/SDL_rect.h>
#include <SDL2/SDL.h> //Libraria utilizata pentru crearea ferestrei;
#include <SDL2/SDL_image.h>
#include <SDL2/SDL_events.h> //Libraria utilizata pentru eventuri;
#include <SDL2/SDL_video.h>

class Window
{
public:
    Window(const std::string &title,int width,int height); //Constructor clasa
    ~Window(); //deconstructor Clasa;
 void pollEvents();//Detecteaza interactiunea cu fereastra;
 void close();//Inchide fereastra creata;
   inline bool isClosed()
 
   const {
        return _closed;
    }
    void render_object() const;
    void draw() const;
    void clear() const;

private:
bool init(); //Initializeaza crearea ferestrei


private:
std::string _title; //titlul ferestrei;
int _width = 800; //grosime initiala fereastra;
int _height = 600; //inaltime initiala fereastra;
bool _closed=false; //verfica daca fereastra e inchisa;
 SDL_Window *_window = nullptr; //Adresa ferestrei create;
 SDL_Renderer *_renderer= nullptr;

};