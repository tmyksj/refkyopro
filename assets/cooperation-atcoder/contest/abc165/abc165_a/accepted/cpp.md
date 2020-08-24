# AtCoder Beginner Contest 165
## A - We Love Golf
```cpp
#include <iostream>

using namespace std;

int main() {
    int k, a, b;
    cin >> k >> a >> b;

    bool res = false;
    for (int i = a; i <= b; i++) {
        res = res || i % k == 0;
    }

    cout << (res ? "OK" : "NG") << endl;
}
```
