#include <SDL2/SDL.h>


class Color
{
 Color(int _r, int _g, int _b, int _a);

 private:
    void setTransparency(int _a);
private:
int r;
int g;
int b;
int a;
};
