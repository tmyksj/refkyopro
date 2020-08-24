# 第一回 アルゴリズム実技検定 過去問
## B - 増減管理
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int a_prev;
    cin >> a_prev;

    for (int i = 1; i < n; i++) {
        int a;
        cin >> a;

        if (a_prev < a) {
            cout << "up " << a - a_prev << endl;
        } else if (a_prev == a) {
            cout << "stay" << endl;
        } else {
            cout << "down " << a_prev - a << endl;
        }

        a_prev = a;
    }
}
```
