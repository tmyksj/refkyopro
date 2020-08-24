# AtCoder Beginner Contest 108
## C - Triangular Relationship
```cpp
#include <iostream>

using namespace std;

int main() {
    long long n, k;
    cin >> n >> k;

    if (k % 2 == 0) {
        cout << (n / k) * (n / k) * (n / k) + ((n + k / 2) / k) * ((n + k / 2) / k) * ((n + k / 2) / k) << endl;
    } else {
        cout << (n / k) * (n / k) * (n / k) << endl;
    }
}
```
