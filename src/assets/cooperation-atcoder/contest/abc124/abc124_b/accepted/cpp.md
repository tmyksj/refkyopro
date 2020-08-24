# AtCoder Beginner Contest 124
## B - Great Ocean View
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int cnt = 0;
    for (int i = 0, hmax = 0; i < n; i++) {
        int h;
        cin >> h;

        if (hmax <= h) {
            hmax = h;
            cnt++;
        }
    }

    cout << cnt << endl;
}
```
