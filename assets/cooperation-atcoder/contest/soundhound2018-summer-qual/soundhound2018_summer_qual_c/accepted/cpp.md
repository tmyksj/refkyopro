# SoundHound Inc. Programming Contest 2018 -Masters Tournament-
## C - Ordinary Beauty
```cpp
#include <iomanip>
#include <iostream>

using namespace std;

int main() {
    double n, m, d;
    cin >> n >> m >> d;
    cout << setprecision(12) << fixed << (d == 0 ? 1 : 2) * (m - 1) * (n - d) / (n * n) << endl;
}
```
