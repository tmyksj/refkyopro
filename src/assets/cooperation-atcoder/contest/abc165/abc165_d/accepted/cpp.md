# AtCoder Beginner Contest 165
## D - Floor Function
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    long long a, b, n;
    cin >> a >> b >> n;
    cout << (a * min(b - 1, n)) / b << endl;
}
```
