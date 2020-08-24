# AtCoder Beginner Contest 019
## D - 高橋くんと木の直径
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int u_d = 0, u = 1;
    for (int i = 1; i < n; i++) {
        cout << "? 1 " << i + 1 << endl;

        int d;
        cin >> d;

        if (u_d < d) {
            u_d = d;
            u = i;
        }
    }

    int v_d = 0;
    for (int i = 0; i < n; i++) {
        if (i == u) {
            continue;
        }

        cout << "? " << u + 1 << " " << i + 1 << endl;

        int d;
        cin >> d;

        if (v_d < d) {
            v_d = d;
        }
    }

    cout << "! " << v_d << endl;
}
```
