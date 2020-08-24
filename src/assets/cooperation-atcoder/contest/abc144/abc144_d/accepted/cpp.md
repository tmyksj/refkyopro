# AtCoder Beginner Contest 144
## D - Water Bottle
```cpp
#include <cmath>
#include <iomanip>
#include <iostream>

using namespace std;

int main() {
    const double pi = 3.14159265358979323846264338327950288;

    double a, b, x;
    cin >> a >> b >> x;

    if (x / a < a * b / 2) {
        cout << setprecision(12) << fixed << 90.0 - atan(2 * x / (a * b * b)) * 180.0 / pi << endl;
    } else if (x / a == a * b / 2) {
        cout << setprecision(12) << fixed << 45.0 << endl;
    } else {
        cout << setprecision(12) << fixed << atan((2 * (a * b - x / a)) / (a * a)) * 180.0 / pi << endl;
    }
}
```
