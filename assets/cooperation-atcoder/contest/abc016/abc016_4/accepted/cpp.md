# AtCoder Beginner Contest 016
## D - 一刀両断
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    long long ax, ay, bx, by, n;
    cin >> ax >> ay >> bx >> by >> n;

    vector<long long> x(n + 1), y(n + 1);
    for (int i = 0; i < n; i++) {
        cin >> x[i] >> y[i];
    }

    x[n] = x[0];
    y[n] = y[0];

    int c = 0;
    for (int i = 0; i < n; i++) {
        long long s0 = (bx - ax) * (y[i] - ay) - (by - ay) * (x[i] - ax);
        long long s1 = (bx - ax) * (y[i + 1] - ay) - (by - ay) * (x[i + 1] - ax);
        long long s2 = (x[i + 1] - x[i]) * (ay - y[i]) - (y[i + 1] - y[i]) * (ax - x[i]);
        long long s3 = (x[i + 1] - x[i]) * (by - y[i]) - (y[i + 1] - y[i]) * (bx - x[i]);
        if (s0 * s1 < 0 && s2 * s3 < 0) {
            c++;
        }
    }

    cout << c / 2 + 1 << endl;
}
```
