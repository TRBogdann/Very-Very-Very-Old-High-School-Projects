#pragma once 

#include <SDL2/SDL_render.h>
#include <SDL2/SDL_shape.h>
#include <string>
#include <iostream>
#include <SDL2/SDL.h> //Libraria utilizata pentru crearea ferestrei;
#include <SDL2/SDL_image.h>
#include <SDL2/SDL_events.h> //Libraria utilizata pentru eventuri;
#include <SDL2/SDL_video.h>

class Shape
{
public:

    Shape();
   ~Shape();

private:

int _width;
int _height;
int x;
int y;
};