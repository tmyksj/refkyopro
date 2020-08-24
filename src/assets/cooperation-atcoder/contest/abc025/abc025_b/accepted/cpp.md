# AtCoder Beginner Contest 025
## B - 双子とスイカ割り
```cpp
#include <algorithm>
#include <iostream>
#include <string>

using namespace std;

int main() {
    int n, a, b;
    cin >> n >> a >> b;

    int x = 0;
    for (int i = 0; i < n; i++) {
        string s;
        int d;
        cin >> s >> d;

        if (s == "East") {
            x -= max(a, min(d, b));
        } else {
            x += max(a, min(d, b));
        }
    }

    if (x < 0) {
        cout << "East " << -x << endl;
    } else if (x == 0) {
        cout << "0" << endl;
    } else {
        cout << "West " << x << endl;
    }
}
```
