# AtCoder Beginner Contest 169
## C - Multiplication 3
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    long long a;
    string b;
    cin >> a >> b;
    cout << a * (100 * (b[0] - '0') + 10 * (b[2] - '0') + (b[3] - '0')) / 100 << endl;
}
```
