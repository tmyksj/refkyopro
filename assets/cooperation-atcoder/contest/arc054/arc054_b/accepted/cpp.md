# AtCoder Regular Contest 054
## B - ムーアの法則
```cpp
#include <cmath>
#include <iomanip>
#include <iostream>

using namespace std;

int main() {
    double p;
    cin >> p;

    double x = 1.5 * log(p * log(2) / 1.5) / log(2);
    cout << setprecision(12) << fixed << (x > 0 ? x + p / pow(2, x / 1.5) : p) << endl;
}
```
