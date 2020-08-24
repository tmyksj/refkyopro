# AtCoder Beginner Contest 130
## B - Bounding
```cpp
#include <iostream>

using namespace std;

int main() {
    int n, x;
    cin >> n >> x;

    int cnt = 1;
    for (int i = 0, d = 0; i < n; i++) {
        int l;
        cin >> l;
        d += l;

        if (d <= x) {
            cnt++;
        }
    }

    cout << cnt << endl;
}
```
