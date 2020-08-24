# AtCoder Beginner Contest 102
## A - Multiple of 2 and N
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;
    cout << (n % 2 == 0 ? n : 2 * n) << endl;
}
```
