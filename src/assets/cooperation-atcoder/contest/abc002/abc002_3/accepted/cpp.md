# AtCoder Beginner Contest 002
## C - 直訴
```cpp
#include <cmath>
#include <iomanip>
#include <iostream>

using namespace std;

int main() {
    double xa, ya, xb, yb, xc, yc;
    cin >> xa >> ya >> xb >> yb >> xc >> yc;

    double a = sqrt((xb - xc) * (xb - xc) + (yb - yc) * (yb - yc));
    double b = sqrt((xc - xa) * (xc - xa) + (yc - ya) * (yc - ya));
    double c = sqrt((xa - xb) * (xa - xb) + (ya - yb) * (ya - yb));
    double s = (a + b + c) / 2;

    cout << setprecision(12) << fixed << sqrt(s * (s - a) * (s - b) * (s - c)) << endl;
}
```
