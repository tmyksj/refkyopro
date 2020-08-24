# AtCoder Beginner Contest 092
## A - Traveling Budget
```cpp
#include <iostream>

using namespace std;

int main() {
    int a, b, c, d;
    cin >> a >> b >> c >> d;
    cout << (a < b ? a : b) + (c < d ? c : d) << endl;
}
```
