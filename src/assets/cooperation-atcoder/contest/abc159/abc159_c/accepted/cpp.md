# AtCoder Beginner Contest 159
## C - Maximum Volume
```cpp
#include <iomanip>
#include <iostream>

using namespace std;

int main() {
    int l;
    cin >> l;

    double w = static_cast<double>(l) / 3;
    cout << setprecision(12) << fixed << w * w * w << endl;
}
```
