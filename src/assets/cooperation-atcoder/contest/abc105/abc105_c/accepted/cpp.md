# AtCoder Beginner Contest 105
## C - Base -2 Number
```cpp
#include <iostream>
#include <list>

using namespace std;

int main() {
    long long n;
    cin >> n;

    if (n == 0) {
        cout << "0" << endl;
    } else {
        list<int> res;
        for (long long i = 2; n != 0; i *= -2) {
            if (n % i == 0) {
                res.push_front(0);
            } else {
                res.push_front(1);
                n -= i / 2;
            }
        }

        for (list<int>::iterator i = res.begin(); i != res.end(); i++) {
            cout << *i;
        }
        cout << endl;
    }
}
```
