# AtCoder Beginner Contest 142
## A - Odds of Oddness
```cpp
#include <iomanip>
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;
    cout << setprecision(12) << fixed << 1 - (n / 2) / static_cast<double>(n) << endl;
}
```
