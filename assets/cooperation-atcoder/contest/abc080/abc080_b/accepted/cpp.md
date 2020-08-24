# AtCoder Beginner Contest 080
## B - Harshad Number
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int fn = 0;
    for (int i = n; i > 0; i /= 10) {
        fn += i % 10;
    }

    cout << (n % fn == 0 ? "Yes" : "No") << endl;
}
```
