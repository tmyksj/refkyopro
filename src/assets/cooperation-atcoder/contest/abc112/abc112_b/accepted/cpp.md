# AtCoder Beginner Contest 112
## B - Time Limit Exceeded
```cpp
#include <iostream>

using namespace std;

int main() {
    int n, t;
    cin >> n >> t;

    int c_min = 1001;
    for (int i = 0; i < n; i++) {
        int ci, ti;
        cin >> ci >> ti;

        if (c_min > ci && t >= ti) {
            c_min = ci;
        }
    }

    if (c_min <= 1000) {
        cout << c_min << endl;
    } else {
        cout << "TLE" << endl;
    }
}
```
