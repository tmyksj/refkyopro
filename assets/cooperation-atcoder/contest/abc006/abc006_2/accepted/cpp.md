# AtCoder Beginner Contest 006
## B - トリボナッチ数列
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int a0 = 0, a1 = 0, a2 = 1;
    for (int i = 0; i < n - 1; i++) {
        int w = (a0 + a1 + a2) % 10007;
        a0 = a1;
        a1 = a2;
        a2 = w;
    }

    cout << a0 << endl;
}
```
