# AtCoder Beginner Contest 001
## C - 風力観測
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    double deg, dis;
    cin >> deg >> dis;

    deg /= 10;
    dis = ((100 * static_cast<int>(dis) / 60 + 5) / 10) / 10.0;

    string dir;
    if (dis <= 0.2) {
        dir = "C";
    } else if (348.75 <= deg || deg < 11.25) {
        dir = "N";
    } else if (deg < 33.75) {
        dir = "NNE";
    } else if (deg < 56.25) {
        dir = "NE";
    } else if (deg < 78.75) {
        dir = "ENE";
    } else if (deg < 101.25) {
        dir = "E";
    } else if (deg < 123.75) {
        dir = "ESE";
    } else if (deg < 146.25) {
        dir = "SE";
    } else if (deg < 168.75) {
        dir = "SSE";
    } else if (deg < 191.25) {
        dir = "S";
    } else if (deg < 213.75) {
        dir = "SSW";
    } else if (deg < 236.25) {
        dir = "SW";
    } else if (deg < 258.75) {
        dir = "WSW";
    } else if (deg < 281.25) {
        dir = "W";
    } else if (deg < 303.75) {
        dir = "WNW";
    } else if (deg < 326.25) {
        dir = "NW";
    } else {
        dir = "NNW";
    }

    int w;
    if (dis <= 0.2) {
        w = 0;
    } else if (dis <= 1.5) {
        w = 1;
    } else if (dis <= 3.3) {
        w = 2;
    } else if (dis <= 5.4) {
        w = 3;
    } else if (dis <= 7.9) {
        w = 4;
    } else if (dis <= 10.7) {
        w = 5;
    } else if (dis <= 13.8) {
        w = 6;
    } else if (dis <= 17.1) {
        w = 7;
    } else if (dis <= 20.7) {
        w = 8;
    } else if (dis <= 24.4) {
        w = 9;
    } else if (dis <= 28.4) {
        w = 10;
    } else if (dis <= 32.6) {
        w = 11;
    } else {
        w = 12;
    }

    cout << dir << " " << w << endl;
}
```
