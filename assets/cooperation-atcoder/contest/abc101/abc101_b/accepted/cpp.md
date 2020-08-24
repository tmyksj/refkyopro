# AtCoder Beginner Contest 101
## B - Digit Sums
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int sn = 0;
    for (int i = n; i > 0; i /= 10) {
        sn += i % 10;
    }

    cout << (n % sn == 0 ? "Yes" : "No") << endl;
}
```
