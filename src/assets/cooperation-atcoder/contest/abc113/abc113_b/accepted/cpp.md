# AtCoder Beginner Contest 113
## B - Palace
```cpp
#include <iostream>

using namespace std;

int main() {
    int n, t, a;
    cin >> n >> t >> a;

    int p = -1;
    double p_diff = 1000;
    for (int i = 0; i < n; i++) {
        int h;
        cin >> h;

        double tmp = t - h * 0.006;
        if (p_diff > (a > tmp ? a - tmp : tmp - a)) {
            p_diff = (a > tmp ? a - tmp : tmp - a);
            p = i + 1;
        }
    }

    cout << p << endl;
}
```
