#include "window.h"

int main(int argc, char **argv)
{
    Window window("My Window",800,600);
    while(!window.isClosed())
    { window.draw();
      window.render_object();
      window.pollEvents();
      window.clear();
    }
    return 0;
}