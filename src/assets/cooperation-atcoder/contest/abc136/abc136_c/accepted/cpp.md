# AtCoder Beginner Contest 136
## C - Build Stairs
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int h_min = 0;
    bool flag = true;
    for (int i = 0; i < n; i++) {
        int h;
        cin >> h;

        if (h_min < h - 1) {
            h_min = h - 1;
        } else if (h_min > h) {
            flag = false;
        }
    }

    cout << (flag ? "Yes" : "No") << endl;
}
```
