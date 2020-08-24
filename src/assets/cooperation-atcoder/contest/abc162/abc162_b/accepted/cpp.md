# AtCoder Beginner Contest 162
## B - FizzBuzz Sum
```cpp
#include <iostream>

using namespace std;

int main() {
    long long n;
    cin >> n;
    cout << n * (n + 1) / 2
            - (n / 3) * (3 * (n / 3) + 3) / 2
            - (n / 5) * (5 * (n / 5) + 5) / 2
            + (n / 15) * (15 * (n / 15) + 15) / 2 << endl;
}
```
