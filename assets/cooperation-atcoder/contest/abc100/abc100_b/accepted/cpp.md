# AtCoder Beginner Contest 100
## B - Ringo's Favorite Numbers
```cpp
#include <iostream>

using namespace std;

int main() {
    int d, n;
    cin >> d >> n;
    cout << (d == 0 ? 1 : (d == 1 ? 100 : 10000)) * (n < 100 ? n : n + 1) << endl;
}
```
