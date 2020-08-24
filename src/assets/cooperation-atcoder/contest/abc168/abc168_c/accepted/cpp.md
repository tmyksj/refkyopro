# AtCoder Beginner Contest 168
## C - : (Colon)
```cpp
#include <cmath>
#include <iomanip>
#include <iostream>

using namespace std;

int main() {
    const double pi = 3.14159265358979323846264338327950288;

    int a, b, h, m;
    cin >> a >> b >> h >> m;

    double x = a * cos(h * pi / 6 + m * pi / 360) - b * cos(m * pi / 30);
    double y = a * sin(h * pi / 6 + m * pi / 360) - b * sin(m * pi / 30);
    cout << setprecision(12) << fixed << sqrt(x * x + y * y) << endl;
}
```
