# AtCoder Grand Contest 035
## A - XOR Circle
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    int a_xor = 0;
    for (int i = 0; i < n; i++) {
        int a;
        cin >> a;
        a_xor ^= a;
    }

    cout << (a_xor == 0 ? "Yes" : "No") << endl;
}
```
