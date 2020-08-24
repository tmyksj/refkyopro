# AtCoder Beginner Contest 158
## B - Count Balls
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    long long n, a, b;
    cin >> n >> a >> b;
    cout << (n / (a + b)) * a + min(n % (a + b), a) << endl;
}
```
