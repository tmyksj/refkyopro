# AtCoder Beginner Contest 138
## B - Resistors in Parallel
```cpp
#include <iomanip>
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    double r = 0;
    for (int i = 0; i < n; i++) {
        int a;
        cin >> a;
        r += (1.0 / a);
    }

    cout << setprecision(12) << fixed << (1.0 / r) << endl;
}
```
