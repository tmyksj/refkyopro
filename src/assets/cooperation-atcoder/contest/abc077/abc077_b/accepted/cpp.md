# AtCoder Beginner Contest 077
## B - Around Square
```cpp
#include <iostream>

using namespace std;

int main() {
    long long n;
    cin >> n;

    long long r = 1;
    while ((r + 1) * (r + 1) <= n) {
        r++;
    }

    cout << r * r << endl;
}
```
