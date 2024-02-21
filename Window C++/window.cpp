#include "window.h"


Window::Window(const std::string &title,int width,int height): //creare fereastra
 _title(title), _width(width),_height(height)
{
    _closed=!init();//daca fereastra nu a putut fi initializata aceasta va fi inchisa
   
}
Window::~Window() //initializare deconstructor
{   SDL_DestroyRenderer(_renderer);
    SDL_DestroyWindow(_window);
    SDL_Quit();
}
bool Window::init() //initializare fereastra
{
    if(SDL_Init(SDL_INIT_VIDEO)!=0)
    {
      std::cerr<<"Failed to initialize window.\n";
      return false ;

    }
    _window=SDL_CreateWindow(_title.c_str(),SDL_WINDOWPOS_CENTERED,SDL_WINDOWPOS_CENTERED,_width,_height,SDL_WINDOW_RESIZABLE);//creare fereastra;
    if(_window==nullptr){
    std::cerr<<"Failed to create window.\n";
    return false;
    }
    _renderer=SDL_CreateRenderer(_window,-1,SDL_RENDERER_ACCELERATED); //randare fereastra 

 if(_renderer==nullptr){
    std::cerr<<"Failed to render window.\n";
    return false;
    }

    return true;
}
void Window::pollEvents() //Detectare interactiune fereastra
{
    SDL_Event event;
    if(SDL_PollEvent(&event))
    {
    switch(event.type)
     {
       case SDL_QUIT:
        _closed=true;
        break;

        default:
        break;

     }
    }
}

void Window::close()
{
_closed=true;
}

void Window::draw() const{
SDL_SetRenderDrawColor(_renderer, 0, 0, 200, 255); //(renderer,rosu,galben,albastru,transparenta/opacitate);
  SDL_RenderClear(_renderer); //curata ecranul dupa fiecare frame;
}

void Window::render_object() const {
     SDL_Rect rect;
      rect.w=120;
      rect.h=120;
      rect.x=(_width/2)-(rect.w/2);
      rect.y=(_height/2)-(rect.h/2);
    SDL_SetRenderDrawColor(_renderer, 200, 0, 200, 255);
    SDL_RenderFillRect(_renderer,&rect);
}

void Window::clear() const  {
   SDL_RenderPresent(_renderer); // redeseneaza ecranul;
 }