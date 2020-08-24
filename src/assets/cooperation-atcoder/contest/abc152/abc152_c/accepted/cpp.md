# AtCoder Beginner Contest 152
## C - Low Elements
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int p_min;
    cin >> p_min;

    int res = 1;
    for (int i = 1; i < n; i++) {
        int p;
        cin >> p;

        if (p_min >= p) {
            p_min = p;
            res++;
        }
    }

    cout << res << endl;
}
```
