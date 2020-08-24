# AtCoder Beginner Contest 026
## D - 高橋君ボール1号
```cpp
#include <cmath>
#include <iomanip>
#include <iostream>

using namespace std;

int main() {
    const double pi = 3.14159265358979323846264338327950288;

    int a, b, c;
    cin >> a >> b >> c;

    double l = 0, r = 100;
    for (int i = 0; i < 100; i++) {
        double m = (l + r) / 2;
        double fm = a * m + b * sin(c * m * pi);

        if (fm < 100) {
            l = m;
        } else {
            r = m;
        }
    }

    cout << setprecision(12) << fixed << l << endl;
}
```
